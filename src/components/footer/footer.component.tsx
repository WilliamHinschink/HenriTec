import React, { useState } from 'react';

interface FormProps {
  name?: string,
  cellphone?: string,
  address?: string,
  message?: string,
}

const initialForm = {
  name: '',
  cellphone: '',
  address: '',
  message: '',
}

function Footer() {
  const [formParam, setFormParam] = useState<FormProps>(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormParam({...formParam, [name] : value});
  }

  const onSubmiting = (e) => {
    e.preventDefault();
    window.open(`https://api.whatsapp.com/send?phone=+5551996295566&text=${encodeURIComponent(formParam.message)}`, '_blank');
  }

  return (
    <footer id="fh5co-footer">

      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <h2 className="fh5co-footer-logo text-center">Contato</h2>
            <div className="fh5co-footer-widget">
              <p className="text-center">Preencha os dados abaixo</p>
            </div>
            <div className="col-md-3 col-sm-4">
              <h4 id="ligue" className="fh5co-footer-lead">Ligue-nos</h4>
              <div id="contacts-social" className="fh5co-footer-widget">
                <ul className="fh5co-social">
                  <li id="mobile">
                    <a className="tel" href="tel:51996295566">
                      <i className="icon-mobile"/>
                      {' '}
                      (51)
                      99629-5566
                    </a>
                  </li>
                  <li id="phone">
                    <a className="tel" href="tel:5135991246">
                      <i className="icon-phone"/>
                      {' '}
                      (51)
                      3599-1246
                    </a>
                  </li>
                  <li id="facebook">
                    <a href="https://pt-br.facebook.com/henri.tec.3">
                      <i
                        className="icon-facebook"
                      />
                      {' '}
                      /henri.tec.3
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9 col-sm-6">
              <form className="form-horizontal" onSubmit={(event) => onSubmiting(event)}>
                <div className="form-group form-group-lg">
                  <div className="col-md-6 col-md-offset-1">
                    <input type="text" placeholder="Nome" value={formParam.name} name={'name'}
                           onChange={(event) => handleChange(event)} className="form-control"/>
                  </div>
                </div>
                <div className="form-group form-group-lg">
                  <div className="col-md-6 col-md-offset-1">
                    <input type="text" placeholder="Telefone" name={'cellphone'} value={formParam.cellphone}
                           onChange={(event) => handleChange(event)} className="form-control"/>
                  </div>
                </div>
                <div className="form-group form-group-lg">
                  <div className="col-md-6 col-md-offset-1">
                    <input type="text" placeholder="Endereço" value={formParam.address} name={'address'}
                           onChange={(event) => handleChange(event)} className="form-control"/>
                  </div>
                </div>
                <div className="form-group form-group-lg">
                  <div className="col-md-6 col-md-offset-1">
                    <textarea className="form-control" value={formParam.message} name={'message'}
                              onChange={(event) => handleChange(event)} placeholder="Descrição do problema"/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-6 col-md-offset-1">
                    <button className="btn btn-primary btn-group-lg">Enviar</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="visible-sm-block clearfix"/>
        </div>
        <div className="row fh5co-row-padded fh5co-copyright">
          <div className="col-md-5">
            <p>
              <small>
                2016 &copy; Henritec. Todos os Direitos reservados.
                {' '}
                <br/>
                Designed by:
                {' '}
                <a
                  href="http://siebentek.hol.es"
                  target="_blank"
                >
                  Sibentek
                </a>
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
