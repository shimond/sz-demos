import { computed, inject } from "@angular/core";
import { UserModel } from "../../model/user.model";
import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "../../services/api.service";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { switchMap, tap } from "rxjs";



export interface ComplexSearchState {
    readonly isBusy: boolean;
    readonly searchText: string;
    readonly results: UserModel[] | null;
    readonly selectedItem: UserModel | null;
    readonly test?: string;
}

const initData: ComplexSearchState = {
    isBusy: false,
    searchText: '',
    results: null,
    selectedItem: null
}

export const ComplexSearchStore = signalStore({
        providedIn: 'root'
    },
    withState(initData),
    withMethods((store, api = inject(ApiService)) => ({
        setSearchWord: rxMethod<string>(word$ => word$.pipe(
            tap(word => patchState(store, { searchText: word }))
        )),
        loadData: rxMethod<void>(p$ => p$.pipe(
            tap(() => patchState(store, { isBusy: true })),
            switchMap(() => api.getAllUsers().pipe()),
            tap((results) => patchState(store, { isBusy: false, results })),
        ))
    })),
    withComputed((store) => ({
        filteredResutls: computed(() => {
            var result = store.results();
            return result === null ? null :
                result.filter(o => o.name.toLowerCase().includes(store.searchText().toLocaleLowerCase()));
        })
    })),
    withHooks((store, http = inject(HttpClient)) => {
        return {
            onInit() {
                console.log('Init store');
                store.loadData();
            },
            onDestroy() {
                console.log('destroy store');
            }
        }
    })
);