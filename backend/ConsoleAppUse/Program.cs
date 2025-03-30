var p = new Person("Shimon", 30);

Test1(p);
Test2(p);
Test3(p);

Console.WriteLine($"{p.Name} {p.Age}");




















Person Test1(Person p)
{
  var pNew = p with { Name= "David"};
    return pNew;
}


void Test2(Person p)
{
    p.Age = 99;
}

void Test3(Person p)
{
    p.Age = p.Age + 10;
}



//foreach (var item in p)
//{
//    Console.WriteLine(item);
//}


//List<Person> people = new List<Person>();
//for (int i = 0; i < people.Count; i++)
//{
//    //people[i] = new Person { Age = i, Name = $"Person {i + 1}" };
//    people.Add(new Person { Age = i, Name = $"Person {i + 1}" });
//}
//people.Where(x => x.Age > 12);

//int[] arr = [1, 3, 6, 7, 8];
////var result = FilterBy(people, (p) => p.Age > 12);
//var result1 = arr.FilterBy((p) => p  == 9);

////bool FilterByAge (Person p, int age)
////{
////    return p.Age > 12;
////}
////bool FilterByAge(Person p)
////{
////    return p.Age > 12;
////}









////Print(people);

//void PrintPerson(Person p)
//{
//    Console.WriteLine(p.ToString());
//}

//void Print(Person[] arr)
//{
//    foreach (var item in arr)
//    {
//        Console.WriteLine(item.ToString());
//    }
//}





//Person w = new Worker();
//Person p = new Person();
//Person[] people = [w, p];
//Print(people);

//void PrintPerson(Person p)
//{

//}
////void Print(Person[] arr)
////{
////	foreach (var item in arr)
////	{
////        Console.WriteLine(item.ToString());
////	}
////}









////List<Person>  p1 =  new List<Person>();
////var name = "Shimon";
////var sw = Stopwatch.StartNew();
////var p = new Person { Name = name };
////Test(name);
////Console.WriteLine(name);
////Console.WriteLine(sw.Elapsed);
////void Test(string s)
////{
////	for (int i = 0; i < 1000000; i++)
////	{
////        s += "A";
////    }
////}

////void TestIt(Person p)
////{
////    p.ToString();
////}




////public class PersonList
////{
////    private ArrayList list = new ArrayList();


////    public void Add(Person s)
////    {
////        list.Add(s);
////    }

////    public void Remove(Person s)
////    {
////        list.Remove(s);
////    }

////    public Person? this[int index]
////    {
////        get { return this.list[index] as Person; }
////    }




////}














