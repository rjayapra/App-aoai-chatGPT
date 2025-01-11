import React, { useEffect, useState } from 'react';
import styles from './IndexList.module.css';  
import { Dropdown, IDropdownOption } from '@fluentui/react';


interface IndexListProps {
    items: string[];
}

const IndexList: React.FC<IndexListProps> = ({ items }) => {
    const dropdownOptions: IDropdownOption[] = items.map((item, index) => ({
      key: index,
      text: item,
    }));
  
   /* const [selectedKey, setSelectedKey] = useState<number>(0);
  
    const onChange = (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => {
      setSelectedKey(option?.key as number);
    }; */

    const [selectedKey, setSelectedKey] = useState<number | undefined>(() => {
      const savedKey = localStorage.getItem('selectedKey');
      return savedKey !== null ? parseInt(savedKey,10) : dropdownOptions[0]?.key as number;
    });
  
    const onChange = (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => {
      const newSelectedKey = option?.key as number;
      setSelectedKey(newSelectedKey);
      localStorage.setItem('selectedKey', newSelectedKey.toString());
      localStorage.setItem('selectedItem', option?.text as string);
    };
  
    useEffect(() => {
      const savedKey = localStorage.getItem('selectedKey');
      if (savedKey !== null) {
        setSelectedKey(parseInt(savedKey, 10));
      } else if (dropdownOptions.length > 0) {
        setSelectedKey(dropdownOptions[0].key as number);
      }
    }, [dropdownOptions]);
    
    const placeholder = items.length > 0 ? items[0] : 'Select Category';
    
    return (
      <div className={styles.dropDownContainer}>
      <Dropdown
        placeholder={placeholder}
        options={dropdownOptions}
        selectedKey={selectedKey}
        onChange={onChange}
        styles={{ dropdown: { width: 300 } }}
      />
      </div>
    );
  };
  
  export default IndexList;