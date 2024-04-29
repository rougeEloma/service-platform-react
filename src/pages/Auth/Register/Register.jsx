import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosFetch from '../../../utils/axiosFetch';
import generateImageURL from '../../../utils/generateImageURL';
import './Register.scss'

const Register = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formInput, setFormInput] = useState({
    username: "",
    email: "",
    password: "",
    phone: '',
    description: '',
    isSeller: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();

    for (let key in formInput) {
      if (formInput[key] === '') {
        toast.error('Veuillez remplir tous les champs de saisie : ' + key);
        return;
      }
      else if (key === 'phone' && formInput[key].length < 9) {
        toast.error('Entrez un numéro de téléphone valide !');
        return;
      }
    }

    setLoading(true);
    try {
      const { url } = await generateImageURL(image);
      const { data } = await axiosFetch.post('/auth/inscription', { ...formInput, image: url });
      toast.success('Inscription réussi!');
      setLoading(false);
      navigate('/connection');
    }
    catch ({ response }) {
      toast.error(response.data.message);
      setLoading(false);
    }
  }

  const handleChange = (event) => {
    const { value, name, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormInput({
      ...formInput,
      [name]: inputValue
    });
  }

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Créer un nouveau compte</h1>
          <label htmlFor="">Identifiant</label>
          <input
            name="username"
            type="text"
            placeholder="johndoe"
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
          />
          <label htmlFor="">Mot de passe</label>
          <input name="password" type="password" onChange={handleChange} />
          <label htmlFor="">Photo de profile</label>
          <input type="file" onChange={(event) => setImage(event.target.files[0])} />
          <button type="submit" disabled={loading}>{loading ? 'Chargement...' : "S'inscrire"}</button>
        </div>
        <div className="right">
          <p>Vous avez déjà un compte ? <Link to='/login'>S'inscrire</Link></p>
          <h1>Je veux devenir prestataire</h1>
          <div className="toggle">
            <label htmlFor="">Activer le compte prestataire</label>
            <label className="switch">
              <input type="checkbox" name='isSeller' onChange={handleChange} />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="">Numéro de téléphone</label>
          <input
            name="phone"
            type="text"
            placeholder="+1 1234 567 890"
            onChange={handleChange}
          />
          <label htmlFor="">Déscription</label>
          <textarea
            placeholder="Une brève description de vous"
            name="description"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  )
}

export default Register