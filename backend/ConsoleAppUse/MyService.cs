using System.Collections;
using System.Text;


public static class ShimonEx
{
    public static void PrintForIsr(this string s)
    {
        Console.WriteLine(s);
    }
    public static List<T> FilterBy<T>(this IEnumerable<T> list, Filter<T> filter)
    {
        var newLIst = new List<T>();
        foreach (var item in list)
        {
            if (filter(item))
            {
                newLIst.Add(item);
            }
        }
        return newLIst;
    }

}



public delegate bool Filter<T>(T p);
public class PersonWriter
{
    public void Write(Person p, Stream stream)
    {
        stream.Write(Encoding.UTF8.GetBytes(p.Name));
        Console.WriteLine(p.ToString());
    }
}

public record Person (string Name, int Age);
