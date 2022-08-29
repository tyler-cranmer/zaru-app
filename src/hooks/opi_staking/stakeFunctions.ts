import { useEthers, useCall } from '@usedapp/core';
import StakingContract from '../../abis/staking_contract_test.json';
import { utils, constants } from 'ethers';
import { Contract } from '@ethersproject/contracts';
import networkMapping from '../../abis/map.json';


/**
 * General purpose function for staking contract. does not take any additional perameters. 
 * Read only function.
 * @param functionName: string - name of the function to call
 */

export const useSimpleFunction = (functionName: string) => {
  const { chainId } = useEthers();
    const { abi } = StakingContract;
  const stakingContractAddress = chainId
    ? networkMapping[String(chainId)]["Farm"][0]
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
        method: functionName,
        args: [],
      }
    ) ?? {};

  if (error) {
    console.error("error: ", error.message);
    return undefined;
  }
  console.log('value: ', value);
  return value?.[0];
};



/**
 * General purpose function for staking contract. Read only function
 * @param functionName: string - name of the function to call
 * @param accountAddress: string - account address
 */
export const useStakeContractFunc = (
  functionName: string,
  accountAddress: string | undefined
) => {
  const { chainId } = useEthers();
  const { abi } = StakingContract;
  const stakingContractAddress = chainId
    ? networkMapping[String(chainId)]['Farm'][0]
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
        method: functionName,
        args: [accountAddress],
      }
    ) ?? {};

  if (error) {
    console.error('error: ', error.message);
    return undefined;
  }
  console.log('value: ', value);
  return value?.[0];
};