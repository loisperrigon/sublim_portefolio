import axios from 'axios';

export async function GetERC20Contracts(userAddress) {
    try {
        // Remplacez 'YOUR_API_KEY' par votre clé API Etherscan (inscrivez-vous sur Etherscan pour en obtenir une)
        const apiKey = 'JHMU6DMUX2XE7934VEHBRS16ZARRV18YA4';
        const apiUrl = `https://api.etherscan.io/api?module=account&action=tokentx&address=${userAddress}&startblock=0&endblock=99999999&sort=asc&apikey=${apiKey}`;

        const response = await axios.get(apiUrl);

        if (response.data.status === '1') {
            const tokenTransactions = response.data.result;

            // Filtrer les transactions entrantes où l'adresse spécifiée est le destinataire
            const incomingTokenTransactions = tokenTransactions.filter(tx => tx.to.toLowerCase() === userAddress.toLowerCase());

            // Utiliser un ensemble (Set) pour stocker les adresses uniques des contrats ERC-20
            const uniqueERC20ContractsSet = new Set(incomingTokenTransactions.map(tx => tx.contractAddress));

            // Convertir l'ensemble en un tableau
            const uniqueERC20Contracts = Array.from(uniqueERC20ContractsSet);

            console.log('Contrats ERC-20 associés aux transactions entrantes du portefeuille :', uniqueERC20Contracts);

            return uniqueERC20Contracts;
        } else {
            console.error('Erreur lors de la récupération des transactions du portefeuille.');
        }
    } catch (error) {
        console.error('Erreur lors de la requête API Etherscan :', error);
    }
}

// Fonction pour récupérer le solde d'un utilisateur pour un contrat ERC-20 spécifié
export async function GetERC20BalanceForContract(contractAddress, userAddress) {
    try {
        const apiKey = 'JHMU6DMUX2XE7934VEHBRS16ZARRV18YA4';
        const apiUrl = `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${contractAddress}&address=${userAddress}&apikey=${apiKey}`;

        const response = await axios.get(apiUrl);

        if (response.data.status === '1') {
            const balance = response.data.result;

            console.log(`Solde pour le contrat ERC-20 ${contractAddress} et l'adresse ${userAddress} :`, balance);

            return balance;
        } else {
            console.error('Erreur lors de la récupération du solde ERC-20.');
        }
    } catch (error) {
        console.error('Erreur lors de la requête API Etherscan :', error);
    }
}