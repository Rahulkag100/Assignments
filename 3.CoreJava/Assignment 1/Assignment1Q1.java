import java.util.Scanner;

class ArmstrongOrNot {
    public boolean armstrongCheck(int n) {
    	int sum=0,armStong = n;
    	while(n>0) {
    		int temp = n%10;
    		sum+=temp*temp*temp;
    		n = n/10;
    	};
    	if(sum == armStong) {
    		return true;
    	}
		return false;
	}
}
public class Assignment1Q1 {

	public static void main(String[] args) {

		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		ArmstrongOrNot ch = new ArmstrongOrNot();
		boolean res = ch.armstrongCheck(n);
		System.out.println(res);
		scan.close();
	}

}
