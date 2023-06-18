import React, { useEffect, useState } from 'react';
import PlusIcon from './Icons/PlusIcon';
import FilterIcon from './Icons/FilterIcon';
import SearchIcon from './Icons/SearchIcon';
import CustomDataTable, { IDataRow } from './CustomDataTable';
import Modal from 'react-responsive-modal';
import { toast } from 'react-hot-toast';
import { getLocalStorage, setLocalStorage } from '@/lib/localstorage';

const Listing = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<IDataRow[]>([]); //* real data *//
  const [tableData, setTableData] = useState<IDataRow[]>([]); //* temp data for search *//

  const [socialLink, setSocialLink] = useState('');
  const [socialName, setSocialName] = useState('');
  const [description, setDescription] = useState('');
  const [search, setSearch] = useState('');

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setOpen(false);
    reset();
  };

  //*first load data init
  useEffect(() => {
    const lsData = getLocalStorage('accounts') || [];
    setData(lsData);
  }, []);

  const createAccount = () => {
    setData([...data, { socialLink, socialName, description }]);
    setLocalStorage('accounts', [...data, { socialLink, socialName, description }]);
    reset();
    onCloseModal();
  };

  const reset = () => {
    setSocialLink('');
    setSocialName('');
    setDescription('');
  };

  useEffect(() => {
    if (search) {
      onSearch();
    } else setTableData(data);
  }, [data, search]);

  const onSearch = () => {
    const searchData = data.filter((i) => {
      if (i.socialLink.toLowerCase().includes(search) || i.socialName.toLowerCase().includes(search)) return i;
    });
    setTableData(searchData);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!socialLink && !socialName && !description) return toast.error('Lütfen tüm alanları doldurunuz.');
    createAccount();
  };

  return (
    <>
      <div className="flex lg:flex-row flex-col-reverse items-start gap-3 lg:items-center justify-between mb-[11px]">
        <div className="flex items-center gap-[9px]">
          <label className="relative flex items-center">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search objects..."
              type="text"
              className="rounded-tl-full font-[300] rounded-bl-full h-[42px] outline-none px-[29px] placeholder:text-[#8C8C8C]"
            />
            <button className="h-[42px] w-[45px] bg-[#744BFC] rounded-tr-full rounded-br-full flex items-center justify-center">
              <SearchIcon />
            </button>
          </label>
          <button className="w-[49px] h-[42px] rounded-full bg-white flex items-center justify-center">
            <FilterIcon />
          </button>
        </div>
        <button onClick={onOpenModal} className="h-[42px] w-[175px] rounded-[39px] flex items-center justify-center gap-[14px] text-[14px] text-white bg-[#744BFC]">
          <PlusIcon /> Yeni Hesap Ekle
        </button>
      </div>
      <CustomDataTable data={tableData} />
      <Modal center open={open} onClose={onCloseModal} animationDuration={0}>
        <form onSubmit={onSubmit} className="lg:w-[488px] w-full px-[35px] pb-[34px] pt-10 flex flex-col gap-[23px]">
          <label className="text-[13px] font-medium leading-5 flex flex-col gap-1">
            Sosyal Medya Linki
            <input value={socialLink} onChange={(e) => setSocialLink(e.target.value)} type="text" className="h-[40px] px-5 border border-[#d9d9d9] rounded-[39px] outline-none" />
          </label>
          <label className="text-[13px] font-medium leading-5 flex flex-col gap-1">
            Sosyal Medya Adı
            <input value={socialName} onChange={(e) => setSocialName(e.target.value)} type="text" className="h-[40px] px-5 border border-[#d9d9d9] rounded-[39px] outline-none" />
          </label>
          <label className="text-[13px] font-medium leading-5 flex flex-col gap-1">
            Açıklama
            <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" className="h-[40px] px-5 border border-[#d9d9d9] rounded-[39px] outline-none" />
          </label>
          <div className="flex items-center justify-end gap-4">
            <button onClick={onCloseModal} className="bg-[#F5F7FF] text-[#744BFC] font-medium text-[13px] h-[37px] w-[82px] flex items-center justify-center rounded-[39px]">
              Vazgeç
            </button>
            <button type="submit" className="bg-[#744BFC] text-white font-medium text-[13px] h-[37px] w-[82px] flex items-center justify-center rounded-[39px]">
              Kaydet
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default Listing;
