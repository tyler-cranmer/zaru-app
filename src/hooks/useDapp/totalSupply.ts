// import { BigNumber, Contract,  } from "ethers";
// import { useCall } from "@usedapp/core";

// const useTotalSupply = (tokenAddress: string | undefined): BigNumber | undefined {
//   const { value, error } = useCall( tokenAddress && {
//         contract: new Contract(tokenAddress, ERC20Interface),
//         method: 'totalSupply',
//         args: [],
//       }
//     ) ?? {};
//    if (error) {
//     console.error(error.message);
//     return undefined;
//   }
//   return value?.[0];
// }

// export default useTotalSupply;
