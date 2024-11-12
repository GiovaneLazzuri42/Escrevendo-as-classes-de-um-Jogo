import java.util.Scanner;

public class ContaTerminal {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Solicitação dos dados do usuário
        System.out.println("Por favor, digite o número da Agência:");
        int numero = scanner.nextInt();
        scanner.nextLine(); // Consumir a quebra de linha

        System.out.println("Por favor, digite o número da Conta:");
        String agencia = scanner.nextLine();

        System.out.println("Por favor, digite o nome do Cliente:");
        String nomeCliente = scanner.nextLine();

        System.out.println("Por favor, digite o saldo inicial:");
        double saldo = scanner.nextDouble();

        // Exibição da mensagem final
        System.out.println("Olá " + nomeCliente + ", obrigado por criar uma conta em nosso banco. "
                + "Sua agência é " + agencia + ", conta " + numero
                + " e seu saldo " + saldo + " já está disponível para saque.");

        scanner.close();
    }
}
