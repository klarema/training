package javaKata1;
import java.util.Random;

public class JavaKata1 {
    public static void main(String args[]){
        int numberOfRolls = 5;
        int advancedToSpace = 0;
        int winsSpace = 20;
        Random random = new Random();
        for(int i = 0; i < numberOfRolls; i++){
            int die = random.nextInt(6)+1;
            advancedToSpace = advancedToSpace + die;
            if(advancedToSpace < winsSpace){
                System.out.println(i+1 +"- You rolled a "+ die + ". You are on space "
                        + advancedToSpace + ". You need " + (winsSpace - advancedToSpace)
                        + " more to win. ");
            }
            else break;
        }
        if(advancedToSpace == winsSpace){
            System.out.println("You win!");
        }
        else if(advancedToSpace < winsSpace)
        {
            System.out.println("Game over! You were short by " + (winsSpace - advancedToSpace));
        }
        else System.out.println("Game over! You exceeds by " + (advancedToSpace - winsSpace));
    }
}
