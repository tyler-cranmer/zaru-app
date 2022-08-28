import { useEthers, useContractFunction } from '@usedapp/core';
import StakingContract from "../../abis/staking_contract_test.json"
import { utils, constants } from "ethers";
import { Contract } from "@ethersproject/contracts";
import networkMapping from "../../abis/map.json"

export const useStakeTokens = (tokenAddress: string) => {
    const { chainId } = useEthers();
    const { abi } = StakingContract;
    const stakingContractAddress = chainId
      ? networkMapping[String(chainId)]['Farm'][0]
      : constants.AddressZero;
    const stakingContractInterface = new utils.Interface(abi)
    const stakingContract = new Contract(
        stakingContractAddress,
        stakingContractInterface
    )

    const { send: stakeTokens, state: stakeTokensState } = useContractFunction(stakingContract, "stake tokens", {
        transactionName: 'stake'
    })

    return {stakeTokens, stakeTokensState}
}