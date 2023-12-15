import { GetERC20Contracts, GetERC20BalanceForContract } from '../app/GetERC20Reader';

export async function GetERC20Balances(userAddress) {
    try {
        const erc20Contracts = await GetERC20Contracts(userAddress);

        for (const contractAddress of erc20Contracts) {
            const balance = await GetERC20BalanceForContract(contractAddress, userAddress);
            console.log(`Solde pour le contrat ERC-20 ${contractAddress} et l'adresse ${userAddress} : ${balance}`);
        }
    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
}

