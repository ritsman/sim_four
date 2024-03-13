//get the total number of records in tables for all sub
//modules in Master module

export async function getPageInfo(axios, url, mod2) {
  const data = await axios.post(url, {
    mod2: mod2,
  });
  console.log(data.data);

  return data.data;
}
//get the total number of records in tables for all sub
//modules in Master module
export async function getPageData(axios, url, records, pageno, mod2) {
  let data = await axios.post(
    //`https://arya-erp.in/simranapi/master/getPageData.php`,
    url,
    {
      records: records,
      pageno: pageno,
      mod2: mod2,
    }
  );
  console.log(`inside getPageData function`);
  console.log(data.data);
  return data.data;
}
