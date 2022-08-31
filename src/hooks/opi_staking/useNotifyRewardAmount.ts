import { useContractFunction } from '@usedapp/core';
import { BigNumber, utils, constants } from 'ethers';
import StakingContract from '../../abis/staking_contract_test.json';
import { Contract } from '@ethersproject/contracts';

export const useNotifyRewardAmounts = () => {
  const { abi, address } = StakingContract;

  const stakingContractAddress = address;
  const stakingContractInterface = new utils.Interface(abi);
  const stakingContract = new Contract(
    stakingContractAddress,
    stakingContractInterface
  );

  const { send: rewardAmount, state: rewardAmountState } = useContractFunction(
    stakingContract,
    'notifyRewardAmount',
    {
      transactionName: 'Set Reward Amount',
    }
  );

  return { rewardAmount, rewardAmountState };
};
