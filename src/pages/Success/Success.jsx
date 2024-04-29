import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosFetch from "../../utils/axiosFetch";
import { useRecoilValue } from "recoil";
import { userState } from "../../atoms";
import "./Success.scss";

const Success = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");
  const user = useRecoilValue(userState);

  useEffect(() => {
    (async () => {
      try {
        await axiosFetch.patch("/commandes", { payment_intent });
        setTimeout(() => {
          navigate("/commandes");
        }, 5000);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    })();
  }, []);

  return (
    <div className="pay-message">
      Paiement réussi. Vous êtes redirigé vers la page des commandes. Merci de ne pas fermer la page.
    </div>
  );
};

export default Success;
