import { useEthers, useCall } from '@usedapp/core';
import { BigNumber, utils, constants } from 'ethers';
import StakingContract from '../../abis/staking_contract_test.json';
import networkMapping from '../../abis/map.json';
import { Contract } from '@ethersproject/contracts';
/**
 * Get the staking balance of a user in our staking contract
 * @param address - The contract address of the token
 */

export const useBalanceOf = (accountAddress: string | undefined): BigNumber | undefined => {
  const { chainId } = useEthers();
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

  const { value, error } =
    useCall(
      stakingContractAddress && {
        contract: stakingContract,
        method: 'balanceOf',
        args: [accountAddress],
      }
    ) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  return value?.[0];
};
