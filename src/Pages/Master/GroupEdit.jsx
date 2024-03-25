import { useLoaderData } from "react-router-dom";
import * as React from "react";
import axios from "axios";
import GroupForm from "./GroupForm";
import { getIdEntry } from "../../Double/fun";
import { MasterUrl } from "../../Consts/Master/MasterUrl.const";

export async function loader({ params }) {
  //console.log(params);

  const data = await getIdEntry(
    axios,
    MasterUrl.getIdEntry,
    params.groupId,
    "group"
  );
  //console.log(`inside loader unit edit:`);
  //console.log(data);
  return data;
}

export default function GroupEdit() {
  const data = useLoaderData();

  return (
    <div>
      <GroupForm data={data} />
    </div>
  );
}
