import { useState, useEffect } from "react";
import axios from 'axios'

import { passCsrfToken } from '../helpers/csrftoken'

const profilePrototype = {
  id: 0,
  first_name: "",
  last_name: "",
  email: "",
  dni: "",
  code: "",
  avatar: null,
  phone: null,
  role: {
    id: 0,
    name: "",
    slug: ""
  }
}

const useProfile = (typeProfile) => {
  const [profile, setProfile] = useState(profilePrototype)
  const url = typeProfile === 'admin' ? '/admins/current_admin' : '/users/current_user'
  useEffect(() => {
    passCsrfToken(document, axios)
    getProfile()
  }, [])

  const getProfile = async() => {
    await axios.get(url, {}).then(response => {
      setProfile(response.data)
    }).catch(error => {
      console.log(error)
    })
  }

  return { profile }
}

export default useProfile

