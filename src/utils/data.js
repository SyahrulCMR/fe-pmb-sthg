const getMainUrl = () => {
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  const mainDomain = url.origin;
  return mainDomain;
};

export function getJalur() {
  const jalur = sessionStorage.getItem("jalur");
  return jalur;
}

export const formContent = [
  {
    type: "text",
    name: "name",
    label: "Nama",
  },
  {
    type: "radio",
    name: "Jenis Kelamin",
    choice: [
      {
        name: "jk",
        label: "Male",
      },
      {
        name: "jk",
        label: "Female",
      },
    ],
  },

  {
    type: "number",
    name: "no_hp",
    label: "No. HP",
  },
  {
    type: "email",
    name: "email",
    label: "Alamat Email",
  },
  {
    type: "date",
    name: "tgl_lahir",
    label: "Tanggal Lahir",
  },
  {
    type: "text",
    name: "tmpt_lahir",
    label: "Tempat Lahir",
  },
  {
    type: "text",
    name: "nationality",
    label: "Kewarganegaraan",
  },
  {
    type: "number",
    name: "no_ktp",
    label: "No. KTP",
  },
];

export async function getProvincies() {
  const mainDomain = getMainUrl()
  const res = await fetch(`${mainDomain}/api/indonesia-region`, {
    cache: "no-store",
  });

  const data = await res.json();
  return data;
}

export async function getRegency(provincy_id) {
  const mainDomain = getMainUrl();

  if (!provincy_id) {
    return [
      {
        value: "",
        label: "",
      },
    ];
  }

  const res = await fetch(
    `${mainDomain}/api/indonesia-region?provincy_id=${Number(
      provincy_id.value
    )}`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();
  return data;
}

export async function getDistricts(provincy_id, regency_id) {
  // console.log(provincy_id.value)
  if (!provincy_id || !regency_id) {
    return [
      {
        value: "",
        label: "",
      },
    ];
  }

  const mainDomain = getMainUrl();


  const res = await fetch(
    `${mainDomain}/api/indonesia-region?provincy_id=${Number(
      provincy_id.value
    )}&regency_id=${Number(regency_id.value)}`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();
  return data;
}
export async function getVillages(provincy_id, regency_id, district_id) {
  // console.log(provincy_id.value)
  if (!provincy_id || !regency_id || !district_id) {
    return [
      {
        value: "",
        label: "",
      },
    ];
  }

  const mainDomain = getMainUrl();


  const res = await fetch(
    `${mainDomain}/api/indonesia-region?provincy_id=${Number(
      provincy_id.value
    )}&regency_id=${Number(regency_id.value)}&district_id=${Number(
      district_id.value
    )}`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();
  return data;
}

export const kewarganegaraanOptions = [
  {
    value: "WNI",
    label: "WNI",
  },
  {
    value: "WNA",
    label: "WNA",
  },
];
export const jenisSekolahOptions = [
  {
    value: "SMA",
    label: "SMA",
  },
  {
    value: "SMK",
    label: "SMK",
  },
  {
    value: "MAN",
    label: "MAN",
  },
  {
    value: "SMKS",
    label: "SMKS",
  },
];

export const generateGraduationYearOptions = () => {
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 9;
  const endYear = currentYear + 1;

  const years = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push({
      value: year.toString(),
      label: year.toString(),
    });
  }

  // Sort the years array in descending order
  years.sort((a, b) => b.value.localeCompare(a.value));

  return years;
};

export const prodiOptions = [
  {
    value: "S1 HUKUM",
    label: "S1 HUKUM",
  },
  {
    value: "S2 HUKUM",
    label: "S2 HUKUM",
  },
];
