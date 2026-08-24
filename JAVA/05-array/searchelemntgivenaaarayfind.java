public class searchelemntgivenaaarayfind {
    public static void main(String[] args) {
        int[] n = { 20, 10, 30, 60, 90 };
        int target = 30;
        boolean found=false;
        for (int i = 0; i < n.length; i++) {
            if (n[i] == target) {
                found = true;
                break;

            }
        }
        if (found) {
            System.out.println("found  search number.");
        }
        else {
            System.out.println("not found search number given.");
        }
        
    }
}
