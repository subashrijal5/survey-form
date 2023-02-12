import { Gender } from "./gender";
import { Address } from "./address";
import { Career } from "./career";
import { College } from "./college";

export type Profile = {
  name: string;
  description: string;
  birthday: string;
  gender: Gender;
  address: Address;
  careers: Career[];
  college: College;
};
