import { useEffect, useState } from 'react';
import { useEthers, useContractFunction } from '@usedapp/core';
import StakingContract from "../../abis/staking_contract_test.json"
import ERC20 from "../../abis/ERC20.json";
import { utils } from "ethers";
import { Contract } from "@ethersproject/contracts";


export const useStakeTokens = (tokenAddress: string) => {
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

  const { send: stakeTokensSend, state: stakeTokensState } =
    useContractFunction(stakingContract, 'stake', {
      transactionName: 'Stake tokens',
    });

  const erc20Interface = new utils.Interface(ERC20.abi);
  const tokenContract = new Contract(tokenAddress, erc20Interface);

  const { send: approveErc20Send, state: approveErc20State } =
    useContractFunction(tokenContract, 'approve', {
      transactionName: 'Approve ERC20 transfer',
    });

  const [amountToStake, setAmountToStake] = useState('0');

  useEffect(() => {
    if (approveErc20State.status === 'Success') {
      stakeTokensSend(amountToStake);

      // the dependency arry
      // the code inside the useEffect anytime
      // anything in this list changes
      // if you want something to run when the component first runs
      // you just have a blank list
    }
  }, [approveErc20State, amountToStake]); // eslint-disable-line react-hooks/exhaustive-deps

  const send = (amount: string) => {
    setAmountToStake(amount);
    return approveErc20Send(stakingContractAddress, amount);
  };

  const [state, setState] = useState(approveErc20State);

  useEffect(() => {
    if (approveErc20State.status === 'Success') {
      setState(stakeTokensState);
    } else {
      setState(approveErc20State);
    }
  }, [approveErc20State, stakeTokensState]);

  return { send, state };
}