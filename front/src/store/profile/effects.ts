import { Dispatch } from "redux";
import profileActions from "./actions";
import { Address } from "../../domain/entity/address";
import {
    isCompletePostalcode,
    sanitizePostalcode
  } from "../../domain/services/address";
export const searchAddressFromPostalcode = (code: string) => async (
  dispach: Dispatch
) => {

    if (!isCompletePostalcode(code)) return;
  const res = await fetch(
    `https://apis.postcode-jp.com/api/v3/postcodes?apikey=[先ほど作成したAPI key]&postcode=${code}`
  );
  const result = await fetch(
    `https://apis.postcode-jp.com/api/v3/postcodes?apikey=[API key]&postcode=${sanitizePostalcode(
      code
    )}`
  ).then(res => res.json());

  if (!result.data[0]) return;

  const address: Partial<Address> = {
    prefecture: result.data[0].pref,
    city: result.data[0].city + result.data[0].town
  };

  dispach(profileActions.searchAddress.done({ result: address, params: {} }));
};
