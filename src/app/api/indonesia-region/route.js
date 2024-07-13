import fs from "fs";
import path from "path";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const provincy_id = searchParams.get("provincy_id");
  const regency_id = searchParams.get("regency_id");
  const district_id = searchParams.get("district_id");
  const village_id = searchParams.get("village_id");

  const filePath = path.join(
    process.cwd(),
    "src/utils/indonesia-region.min.json"
  );
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  // if (
  //   typeof provincy_id == "string" ||
  //   typeof regency_id == "string" ||
  //   typeof district_id == "string"
  // ) {
  //   return Response.json({
  //     message: "Cannot get",
  //   });
  // }

  let filteredData = data;

  if (provincy_id) {
    filteredData = filteredData.filter(
      (province) => province.id === provincy_id
    );
  } else {
    // If provincy_id is not provided, return all provinces
    return Response.json(
      data.map((province) => ({ value: province.id, label: province.name }))
    );
  }

  if (regency_id && filteredData.length > 0) {
    filteredData = filteredData[0].regencies.filter(
      (regency) => regency.id === regency_id
    );
  } else if (!regency_id) {
    // If regency_id is not provided, return all regencies of the filtered province
    return Response.json(
      filteredData[0].regencies.map((regency) => ({
        value: regency.id,
        label: regency.name,
      }))
    );
  }

  if (district_id && filteredData.length > 0) {
    filteredData = filteredData[0].districts.filter(
      (district) => district.id === district_id
    );
  } else if (!district_id) {
    // If district_id is not provided, return all districts of the filtered regency
    return Response.json(
      filteredData[0].districts.map((district) => ({
        value: district.id,
        label: district.name,
      }))
    );
  }

  if (village_id && filteredData.length > 0) {
    filteredData = filteredData[0].villages.filter(
      (village) => village.id === village_id
    );
  } else if (!village_id) {
    // If village_id is not provided, return all villages of the filtered district
    return Response.json(
      filteredData[0].villages.map((village) => ({
        value: village.id,
        label: village.name,
      }))
    );
  }
}
