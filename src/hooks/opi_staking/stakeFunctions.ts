import { useEthers, useCall } from '@usedapp/core';
import StakingContract from '../../abis/staking_contract_test.json';
import { utils, constants } from 'ethers';
import { Contract } from '@ethersproject/contracts';
import networkMapping from '../../abis/map.json';

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
