import { useEthers, useContractFunction, useCall } from '@usedapp/core';
import { BigNumber, utils, constants } from 'ethers';
import StakingContract from '../../abis/staking_contract_test.json';
import networkMapping from '../../abis/mappings.json';
import { Contract } from '@ethersproject/contracts';
/**
 * Get the staking balance of a user in our staking contract
 * @param address - The contract address of the token
 */

export const useBalanceOf = (address: string): BigNumber | undefined => {
  const { chainId } = useEthers();
  const { abi } = StakingContract;
  const stakingContractAddress = chainId
    ? networkMapping[String[chainId]]['StakingFarm'][0]
    : constants.AddressZero;
  const stakingContractInterface = new utils.Interface(abi);
  const stakingContract = new Contract(
    stakingContractAddress,
    stakingContractInterface
  );

  const { value, error } =
    useCall(
      stakingContractAddress && {
        contract: stakingContract,
        method: 'balanceOf',
        args: [address],
      }
    ) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  return value?.[0];
};
