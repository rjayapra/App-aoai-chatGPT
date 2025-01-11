import { useContext, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Dialog, Stack, TextField } from '@fluentui/react'
import { CopyRegular } from '@fluentui/react-icons'

import { CosmosDBStatus } from '../../api'

import { AppStateContext } from '../../state/AppProvider'
import styles from './Input.module.css'
import IndexList from '../../components/IndexList/IndexList'
import TextArea from '../../components/common/TextArea'
import Label from '../../components/common/Label'

const splitStringToArray = (input: string | undefined): string[] => {
  if (input) {
    return input.split(',').map(item => item.trim());
  }
  return input ? [input] : [];
};

const Input = () => {
  const appStateContext = useContext(AppStateContext)
  const ui = appStateContext?.state.frontendSettings?.ui
  const selectionTitle='Data Source'
  const indexItems = splitStringToArray(ui?.index_items);
  const sysMessageTitle='System Prompt'
  const [sysMessage, setSysMessage] = useState<string>(ui?.system_message || '');

  useEffect(() => { }, [appStateContext?.state.isCosmosDBAvailable.status])

  return (
    <div className={styles.container}>
        <Stack horizontal className={styles.inputRoot}>
            <div className={styles.inputContainer}>
            <Stack horizontal verticalAlign="center">
                <Label text={selectionTitle} htmlFor="indexItems" />
                <IndexList items={indexItems} />
                <Label text={sysMessageTitle} htmlFor="sysMessage" />                             
                <TextArea value={sysMessage} onChange={setSysMessage} rows={4} cols={50} />            
            </Stack>
            </div>  
        </Stack>        
    </div>
  )
}

export default Input

