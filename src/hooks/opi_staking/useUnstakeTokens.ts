import {  useContractFunction } from '@usedapp/core';
import StakingContract from '../../abis/staking_contract_test.json';
import { utils } from 'ethers';
import { Contract } from '@ethersproject/contracts';



export const useUnstakeTokens = () => {
  const { abi, address } = StakingContract;
  // const stakingContractAddress = chainId
  //   ? networkMapping[String(chainId)]['Farm'][0]
  //   : constants.AddressZero;
  const stakingContractAddress = address;
  const stakingContractInterface = new utils.Interface(abi);
  const stakingContract = new Contract(
    stakingContractAddress,
    stakingContractInterface
  );
    
    return useContractFunction(stakingContract, "exit", {
        transactionName: "Unstake tokens",
    })
}