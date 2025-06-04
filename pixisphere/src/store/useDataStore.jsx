import React from 'react'
import { create } from 'zustand'

const useDataStore = create((set)=>({
    storeData:null,
    setData:(incomingData)=>{        
        set({
            storeData:incomingData,
        })},
}))
export default useDataStore;