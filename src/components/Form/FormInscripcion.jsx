import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createInscription, getCountries } from "../../redux/actions";
import ButtonMain from "../Button/ButtonMain";
import stylesMain from './../../css/styles.module.css';
import styles from './Form.module.css';
import ModalAlert from "../Modal/ModalAlert";
import ModalConfirm from "../Modal/ModalConfirm";

function FormInscripcion({referencia}) {
    const countries = useSelector((state) => state.countries);
    const [showModalAlert, setShowModalAlert] = useState(false);
    const [showModalConfirm, setShowModalConfirm] = useState(false);
    const [messageAlert, setMessageAlert] = useState('');
    const [dataModalConfirm, setDataModalConfirm] = useState('');

    const ages = getAges ();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
        getCodeCountry('Perú');
        setInput(
            {...input, country:'Perú'}
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    const [input, setInput] = useState({
        name: "",
        lastname: "",
        age: "0",
        email: "",
        country: "",
        phone: ""
    });
    const [error, setError] = useState({
        name: "",
        lastname: "",
        age: "",
        email: "",
        country: "",
        phone: ""
    });

    const onInputChange = (e) => {
        e.preventDefault();
        setInput(
            {...input, [e.target.name]:e.target.value}
        );
        setError(
            validateInput({...input, [e.target.name]:e.target.value})
        );
    };

    
    const getCodeCountry = (nameCountry) => {
        const country =  countries.find(country => {
            return country.name_country === nameCountry;
        });
        return country;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const date = new Date();
        if(Object.entries(error).length === 0){

            let linkWhatsapp = `https://api.whatsapp.com/send?phone=+51951420376&text=Hola%20soy%20${getName(input.name)}%20y%20quer%C3%ADa%20confirmar%20mi%20inscripci%C3%B3n%20al%20reto%20de%20sistemas.`;

            const newInscription = {
                name: input.name,
                lastname: input.lastname,
                age: input.age,
                email: input.email,
                country: input.country,
                phone: input.phone,

                date : date.toISOString().split('T')[0],
                idcountry : getCodeCountry(input.country).id,
                idcareers : ['1']
            };
            const dataModal = {
                name: getName(input.name),
                link : linkWhatsapp
            }
            // dispatch(createInscription(newInscription));
            setDataModalConfirm(dataModal);
            setShowModalConfirm(true);
            setInput({
                name: "",
                lastname: "",
                age: "0",
                email: "",
                country: "Perú",
                phone: ""
            });
            setError({
                name: "",
                lastname: "",
                age: "",
                email: "",
                country: "",
                phone: ""
            });

        }else{
            if(input.name === '') setMessageAlert('* Ingrese su nombre')
            else setMessageAlert(error[Object.keys (error)[0]]);
            setShowModalAlert(true);
        };
    };
    return (
        <div className={styles.form}>
            <form onSubmit={onSubmit} ref={referencia}>
                <input 
                    type="text" 
                    name='name'
                    value={input.name}
                    placeholder='Ingresar nombres' 
                    onChange={onInputChange} className={error.name && stylesMain.danger}/>
                <p className={stylesMain.danger}>{error.name}</p>
                <input 
                    type="text" 
                    name='lastname'
                    value={input.lastname}
                    placeholder='Ingresar apellidos' 
                    onChange={onInputChange} className={error.lastname && stylesMain.danger}/>
                <p className={stylesMain.danger}>{error.lastname}</p>
               
                <select
                    type="select" 
                    name='age'
                    value={input.age} 
                    onChange={onInputChange}>
                        <option value={'0'} >Seleccione su edad</option>
                        {
                            ages.map((age) => {
                                return age.length>0 ?  <option value={age} key={age}>{age}</option> : ''
                            })
                        }
                </select>
                <p className={stylesMain.danger}>{error.age}</p>
             
                <input 
                    type="email" 
                    name='email'
                    value={input.email}
                    placeholder='Ingresar email' 
                    onChange={onInputChange} className={error.email && stylesMain.danger}/>
                <p className={stylesMain.danger}>{error.email}</p>
            
                <select
                    type="select" 
                    name='country'
                    value={input.country} 
                    onChange={onInputChange}>
                        <option value={'0'} >Seleccione país</option>
                        {
                            countries.map((country) => {
                                return country.name_country.length>0 ?  <option value={country.name_country} key={country.name_country}>{country.name_country}</option> : ''
                            })
                        }
                </select>
                <p className={stylesMain.danger}>{error.country}</p>
            
                <div className={styles.form_input_whatsapp}>
                    <div className={styles.form_input}>
                        {
                            getCodeCountry(input.country)  ? <img src={getCodeCountry(input.country).flag} alt={getCodeCountry(input.country).name_country} /> : ''
                        }
                        {
                            getCodeCountry(input.country)   ? <h3 className={styles.form_text}>+{getCodeCountry(input.country).code_country}</h3> : ''
                        }
                        
                        <input 
                        type="text" 
                        name='phone'
                        value={input.phone}
                        placeholder='Ingresar número whatsapp' 
                        onChange={onInputChange} className={error.phone && stylesMain.danger}/>
                    </div>

                    <p className={stylesMain.danger}>{error.phone}</p>
                </div>
                <ButtonMain titleButton = 'Inscribirme ahora'/>
                <ModalAlert show={showModalAlert} setShow={setShowModalAlert} modalBody={messageAlert}/> 
                <ModalConfirm show={showModalConfirm} setShow={setShowModalConfirm} modalBody={dataModalConfirm}/> 
            </form>
        </div>
    );
}

export default FormInscripcion;

export function validateInput (input){
    let error = {};
    if(!input.name){
      error.name = '* Nombre es requerido';
    }else if(!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/g.test(input.name)){
      error.name = '* Nombre es inválido, solo acepta letras';
    };
    if(!input.lastname){
      error.lastname = '* Apellidos es requerido';
    // }else if(!/^[A-Za-z ]+$/.test(input.lastname)){
    }else if(!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/g.test(input.lastname)){
      error.lastname = '* Apellidos es inválido, solo acepta letras';
    };
    if(!input.email){
      error.email = '* Email es requerido';
    }else if(!/\S+@\S+\.\S+/.test(input.email)){
      error.email = '* Email es inválido, ejm: prueba@gmail.com';
    };
    if(input.age === '0'){
        error.age = '* Seleccione su edad';
    }
    if(input.country === '0'){
        error.country = '* Seleccione un país';
    }
    if(!input.phone){
        error.phone = '* Whatsapp es requerido';
    }else if(!/^[0-9 ]+$/.test(input.phone)){
        error.phone = '* Whatsapp es inválido, sólo ingrese números';
    }
    return error;
};

export function getAges (){
    const ages = [
        '15 años (4ro de secundaria)',
        '16 años (5ro de secundaria)',
        '17 - 18 años',
        '19 - 20 años',
        'mayor de 20 años',
    ];
    return ages;
};

export function getName(name) {
    let firstName = name.split(' ')[0];
    return firstName.charAt(0).toUpperCase() + firstName.slice(1);
}