package javaKataProject1;

public class Player {
    private String playerName;
    private String playerGuess;

    public Player(String playerName){
        setPlayerName(playerName);
    }

    public String getPlayerName() {
        return playerName;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }

    public String getPlayerGuess() {
        return playerGuess;
    }

    public void setPlayerGuess(String playerGuess) {
        this.playerGuess = playerGuess;
    }
}
