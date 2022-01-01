import { useState, useEffect } from 'react';
import paginate from './utils';

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

export const useFetch = () => {
   const [loading, setLoading] = useState(true);
   const [data, setData] = useState([]);

   const getProducts = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setData(paginate(data));
      setLoading(false);
   };

   useEffect(() => {
      getProducts();
   }, []);
   return { loading, data };
};

/*
let data = [
   {
      login: 'elvan',
      id: 35147,
      node_id: 'MDQ6VXNlcjM1MTQ3',
      avatar_url: 'https://avatars.githubusercontent.com/u/35147?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/elvan',
      html_url: 'https://github.com/elvan',
      followers_url: 'https://api.github.com/users/elvan/followers',
      following_url:
         'https://api.github.com/users/elvan/following{/other_user}',
      gists_url: 'https://api.github.com/users/elvan/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/elvan/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/elvan/subscriptions',
      organizations_url: 'https://api.github.com/users/elvan/orgs',
      repos_url: 'https://api.github.com/users/elvan/repos',
      events_url: 'https://api.github.com/users/elvan/events{/privacy}',
      received_events_url: 'https://api.github.com/users/elvan/received_events',
      type: 'User',
      site_admin: false,
   },
   {
      login: 'cksachdev',
   },
];
*/
