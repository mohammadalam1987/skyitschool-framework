package base;

public class Ragib {

	public static void main(String[] args) {
		
		int a [] = {1,3,6,9,88,16,5,7,20};
		int max = a[0];
		for (int i = 1; i<a.length; i++) {
		if (a[i] > max)
		max = a[i];
		}
		System.out.println ("Maximum number is: " + max);

	}

}



