const getMainUrl = () => {
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  const mainDomain = url.origin;
  return mainDomain;
};

export function getJalur() {
  const jalur = sessionStorage.getItem("_jalur");
  return jalur;
}

export async function getProvincies() {
  const mainDomain = getMainUrl();
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
    `${mainDomain}/api/indonesia-region?provincy_id=${provincy_id.value}`,
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
    `${mainDomain}/api/indonesia-region?provincy_id=${provincy_id.value}&regency_id=${regency_id.value}`,
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
    `${mainDomain}/api/indonesia-region?provincy_id=${provincy_id.value}&regency_id=${regency_id.value}&district_id=${district_id.value}`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();
  return data;
}

export const jalurOptions = [
  {
    value: "UMUM",
    label: "UMUM",
  },
  {
    value: "KIPK",
    label: "KIPK",
  },
];

export const daftarOptions = [
  {
    value: "BARU",
    label: "BARU",
  },
  {
    value: "PINDAHAN",
    label: "PINDAHAN",
  },
];

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
export const stayWithOptions = [
  {
    value: "ORANG TUA",
    label: "ORANG TUA",
  },
  {
    value: "WALI",
    label: "WALI",
  },
  {
    value: "SENDIRI",
    label: "SENDIRI",
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
export const agamaOptions = [
  {
    value: "ISLAM",
    label: "ISLAM",
  },
  {
    value: "HINDU",
    label: "HINDU",
  },
  {
    value: "BUDHA",
    label: "BUDHA",
  },
  {
    value: "KRISTEN",
    label: "KRISTEN",
  },
  {
    value: "KONGHUCU",
    label: "KONGHUCU",
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

export const getGelombang = async () => {
  const res = await fetch("http://127.0.0.1:8000/api/setting-pmb", {
    cache: "no-store",
  });

  const result = await res.json();

  return result.data.gelombang;
};

export const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number);
};

export const formatTanggal = (date) => {
  return date.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export const parseGelombang = (gelombangData) => {
  const currentDate = new Date();

  // Tipe dan harga untuk gelombang
  const tipeGelombang = ["S1 Reguler", "S1 Karyawan", "S2 Reguler"];

  const hargaTipe = {
    "S1 Reguler": 400000,
    "S1 Karyawan": 500000,
    "S2 Reguler": 1000000,
  };

  const bulanIndonesia = {
    Januari: 0,
    Februari: 1,
    Maret: 2,
    April: 3,
    Mei: 4,
    Juni: 5,
    Juli: 6,
    Agustus: 7,
    September: 8,
    Oktober: 9,
    November: 10,
    Desember: 11,
  };

  // Map the gelombang data with the corresponding type and price
  const parsedGelombang = gelombangData.flatMap((item, index) => {
    const [name, dates] = item.split(" : ");
    const [start, end] = dates.split(" - ").map((date) => {
      const [day, month, year] = date.split(" ");
      const monthIndex = bulanIndonesia[month];
      const formattedDate = new Date(year, monthIndex, parseInt(day));
      return formattedDate;
    });

    return tipeGelombang.map((tipe, tipeIndex) => {
      const price = rupiah(hargaTipe[tipe] || 0);
      return { name: `${tipe} ${name}`, start, end, tipe, price };
    });
  });

  // Filter the gelombang based on the current date
  const filteredGelombang = parsedGelombang.filter(({ start, end }) => {
    return currentDate >= start && currentDate <= end;
  });

  return filteredGelombang;
};
