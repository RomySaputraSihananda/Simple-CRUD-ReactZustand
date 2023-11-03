import { createWithEqualityFn } from "zustand/traditional";
import me from "./../assets/me.jpg";
import freya from "./../assets/freya.jpg";

const useAppStore = createWithEqualityFn((set) => ({
  data: [
    {
      id: 1,
      media: {
        github: "https://github.com/romysaputrasihananda",
      },
      name: "Romy Saputra Sihananda",
      jenisKelamin: "Laki-laki",
      jurusan: "TKJ",
      tanggalLahir: "2005-12-22",
      agama: "Islam",
      foto: me,
      katakata:
        "Impian tidak dapat terwujud dengan sendirinya, akan tetapi impian akan datang ketika seseorang berusaha untuk meraihnya",
    },
    {
      id: 2,
      name: "Freyanashifa Jayawardana",
      jenisKelamin: "Perempuan",
      jurusan: "Pacarku",
      tanggalLahir: "2006-02-13",
      agama: "Islam",
      foto: freya,
    },
  ],
  addData: (data) => set((state) => ({ data: [...state.data, data] })),
  setData: (data) => set(() => ({ data })),
}));

export default useAppStore;
