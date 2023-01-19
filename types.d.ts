type transaction = {
  uid: string;
  type: string;
  type_especify?: string;
  date: string;
  cash: string;
  desc: string;
  latitude?: string;
  longitude?: string;
};

type user = {
  displayName?: string | null;
  email: string | null;
  photoURL: string | null;
  sexo: string | undefined;
  uid: string | null;
};

type _id = {
  _id: { $oid: "" };
};

export { user, transaction, _id };
