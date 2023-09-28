'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { FilterValues } from '@/types/common';
import { filterOptions } from '@/utils/constants';
import SortIcon from '../../assets//icons/sort.svg';
import DropdonImage from '../../assets/icons/drop-down.svg';
import GreenDropdown from '../../assets/icons/green-dropdown.svg';
import DownArrow from '../../assets/icons/down-arrow.svg';
import WhiteCart from '../../assets/icons/white-cart.svg';
import CheckIcon from '../../assets/icons/check.svg';
import data from '../../data/data.json';
import useCartStore from '@/hooks/use-cart-store';
import useDataStore from '@/hooks/use-data-store';
import { CartItem } from '@/types/cart';
import Empty from '../empty/Empty';

const DomainTable = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<FilterValues | null>(
    null
  );
  const [selectedDomenId, setSelectedDomenId] = useState<number | null>(null);

  const { addToCart, cartItems } = useCartStore();
  const { data: storeData, setItems } = useDataStore();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    setItems(data);
  }, [setItems]);
  useEffect(() => {
    if (selectedFilter) {
      if (selectedFilter === 'price') {
        setItems(
          storeData.sort((a, b) => a[selectedFilter] - b[selectedFilter])
        );
      } else if (selectedFilter === 'name') {
        setItems(storeData.sort((a, b) => a.name.localeCompare(b.name)));
      } else if (
        selectedFilter === 'addedTime' ||
        selectedFilter === 'expiredDate'
      ) {
        setItems(
          storeData.sort(
            (a, b) =>
              +new Date(a[selectedFilter]) - +new Date(b[selectedFilter])
          )
        );
      }
    }
  }, [setItems, selectedFilter, storeData]);
  if (!isMounted) return null;
  return (
    <div className="grid-right g-4">
      <div className="flex items-center g-2 sort-menu">
        <h4>სორტირება:</h4>
        <div className="flex items-center g-5">
          {filterOptions.map((option) => (
            <div
              onClick={() => setSelectedFilter(option.id as FilterValues)}
              className="flex items-center g-1 cursor-pointer"
              key={option.id}
            >
              <p
                className={`${
                  selectedFilter === option.id
                    ? 'text-green'
                    : 'text-light-gray'
                }`}
              >
                {option.label}
              </p>
              {selectedFilter === option.id && (
                <Image src={SortIcon} alt="sort" />
              )}
            </div>
          ))}
        </div>
        <div className="ml-auto">
          <span className="underline text-black font-bold font-md cursor-pointer">
            როგორ გავყიდო დომენი?
          </span>
        </div>
      </div>
      <div className="input-row">
        <div className="base-input">
          <input placeholder="სორტირება" type="text" />
        </div>

        <div className="base-input">
          <select
            onChange={(e) => setSelectedFilter(e.target.value as FilterValues)}
            value={selectedFilter || ''}
            placeholder="სორტირება"
          >
            {filterOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {storeData.length === 0 ? (
        <div className="flex items-center justify-center pt-2">
          <Empty />
        </div>
      ) : (
        <div className="list p-1 g-5">
          {storeData.map((domain) => {
            const isInCart = cartItems.find((item) => item.id === domain.id);
            return (
              <div
                onClick={() =>
                  setSelectedDomenId(
                    domain.id === selectedDomenId ? null : domain.id
                  )
                }
                className={`flex items-center justify-between domen p-1  ${
                  selectedDomenId === domain.id && 'bg-medium-gray br-10'
                }`}
                key={domain.id}
              >
                <div className="flex items-center g-5">
                  <Image
                    className="cursor-pointer"
                    src={
                      selectedDomenId === domain.id
                        ? GreenDropdown
                        : DropdonImage
                    }
                    alt="dropdown"
                  />
                  <p className="font-bold">{domain.name}</p>
                </div>
                <div className="flex  items-center domen-sub">
                  <div className="flex flex-col g-1">
                    <p className="font-bold">{domain.price} ლ</p>
                    <p className="text-dark-gray font-sm">14517.35 $</p>
                  </div>
                  {isInCart ? (
                    <div className="flex items-center g-1 in-cart bg-medium-gray">
                      <Image src={CheckIcon} alt="check" />
                      <p>კალათაშია</p>
                    </div>
                  ) : (
                    <div
                      onClick={() => addToCart(domain)}
                      className="add-cart g-1 cursor-pointer"
                    >
                      {selectedDomenId === domain.id && (
                        <p className="text-white font-sm">დამატება</p>
                      )}
                      <Image src={WhiteCart} alt="white-cart" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DomainTable;
