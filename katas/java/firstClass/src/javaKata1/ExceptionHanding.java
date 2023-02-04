package javaKata1;

import java.io.File;
import java.io.IOException;

public class ExceptionHanding {
    public static void main(String[] args){
        createNewFile();
    }
    public static void createNewFile(){
        File file = new File("myFiles\thisFile.txt");
        try{
            file.createNewFile();
        }catch(IOException e){
            e.printStackTrace();
        }
    }
}
