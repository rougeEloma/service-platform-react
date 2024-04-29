import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axiosFetch from '../../utils/axiosFetch';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms';
import Loader from '../../components/Loader/Loader';
import './MesServices.scss';

const MesServices = () => {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ['mes-services'],
    queryFn: () =>
      axiosFetch(`/services?userID=${user._id}`)
        .then(({ data }) => {
          console.table(data)
          return data;
        })
        .catch(({ response }) => {
          console.log(response.data);
        })
  });

  const mutation = useMutation({
    mutationFn: (_id) =>
      axiosFetch.delete(`/services/${_id}`)
    ,
    onSuccess: () =>
      queryClient.invalidateQueries(['mes-services'])
  });

  const handleGigDelete = (gig) => {
    mutation.mutate(gig._id);
    toast.success(gig.title + ' Supprimé avec succès!');
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='myGigs'>
      {
        isLoading
          ? <div className='loader'> <Loader size={35} /> </div>
          : error
            ? "Quelque chose s'est mal passé"
            : <div className="container">
              <div className="title">
                <h1>Mes services</h1>
                <Link to='/ajouter' className='link'>
                  <button>Ajouter</button>
                </Link>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Titre</th>
                    <th>Prix</th>
                    <th>Commandes</th>
                    <th>Plus</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map((gig) => (
                      <tr key={gig._id} onClick={() => navigate(`/service/${gig._id}`)}>
                        <td>
                          <img
                            className="cover"
                            src={gig.cover}
                            alt=""
                          />
                        </td>
                        <td>{gig.title}</td>
                        <td>{gig.price.toLocaleString("en-IN", {
                          maximumFractionDigits: 0,
                          style: "devise",
                          currency: "USD",
                        })}</td>
                        <td>{gig.sales}</td>
                        <td>
                          <img className='delete' src="./media/delete.png" alt="delete" onClick={() => handleGigDelete(gig)} />
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
      }
    </div>
  )
}

export default MesServices