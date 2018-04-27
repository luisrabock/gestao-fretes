import '../regions/formik-demo.css';
import React from 'react';
import { render } from 'react-dom';
import { withFormik } from 'formik';
import Yup from 'yup';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import axios from 'axios';

import Row from '../common/layout/row';

const URL = 'http://localhost:3000/locations/cidades';
const URL_SUB = 'http://localhost:3000/regions/';

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    region: Yup.string()
      .lowercase('Deve ser digitado em lowercase')
      .required('Região é obrigatória!'),
    transp: Yup.string()
      .lowercase('Deve ser digitado em lowercase')
      .required('Transportadora é obrigatória!'),
    citys: Yup.array()
      .required('É obrigatório pelo menos uma cidade')
      .of(
        Yup.object().shape({
          label: Yup.string().required(),
          value: Yup.string().required(),
        })
      ),
  }),
  mapPropsToValues: props => ({
    region: '',
    citys: [],
    transp:''
  }),
  handleSubmit: (values, { setSubmitting }) => {
    const payload = {
      ...values,
      citys: values.citys.map(t => t.value),
    };
    axios.post(`${URL_SUB}`, {regions: payload.region, citys: payload.citys, transp: payload.transp})
      .then(resp => console.log(resp))
      alert(JSON.stringify(payload));
      setSubmitting(false);
  },
  displayName: 'MyForm',
});

const MyForm = props => {
  const {
    values,
    touched,
    dirty,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    setFieldValue,
    setFieldTouched,
    isSubmitting,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="region" style={{ display: 'block' }}>
        Região
      </label>
      <input
        id="region"
        placeholder="Digite a região"
        type="text"
        value={values.region}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.region &&
      touched.region && (
        <div style={{ color: 'red', marginTop: '.5rem' }}>
          {errors.region}
        </div>
      )}

      <label htmlFor="transp" style={{ display: 'block' }}>
        Transportadora
      </label>
      <input
        id="transp"
        placeholder="Digite o CNPJ do transportador"
        type="text"
        value={values.transp}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.transp &&
      touched.transp && (
        <div style={{ color: 'red', marginTop: '.5rem' }}>
          {errors.transp}
        </div>
      )}
      <MySelect
        value={values.citys}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
        error={errors.citys}
        touched={touched.citys}
      />
      <button
        type="button"
        className="outline"
        onClick={handleReset}
        disabled={!dirty || isSubmitting}
      >
        Limpar
      </button>
      <button className="outline1"
      type="submit" disabled={isSubmitting}>
        Processar
      </button>
    </form>
  );
};


class MySelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = { options: [] };

    this.refresh();
}

refresh() {
  axios.get(`${URL}`)
        .then(resp => this.setState({...this.state, options: resp.data}))
}
  handleChange = value => {
    // this is going to call setFieldValue and manually update values.topcis
    this.props.onChange('citys', value);
  };

  handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.topcis
    this.props.onBlur('citys', true);
  };

  render() {
    return (
      <div style={{ margin: '1rem 0' }}>
        <label htmlFor="color">
          Cidades (Selecione as cidades da região){' '}
        </label>
        <Select
          id="color"
          options={this.state.options}
          multi={true}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={this.props.value}
          placeholder='Selecione as cidades'
        />
        {!!this.props.error &&
        this.props.touched && (
          <div style={{ color: 'red', marginTop: '.5rem' }}>
            {this.props.error}
          </div>
        )}
      </div>
    );
  }
}

const MyEnhancedForm = formikEnhancer(MyForm);

// Helper styles for demo
import '../regions/formik-demo.css';

import { DisplayFormikState,
} from '../regions/formik-helper';

const Regions = () => (
  <Row>
    <div className="app">

      <MyEnhancedForm />
    </div>
  </Row>
);

export default Regions;
