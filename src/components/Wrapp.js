import Header from "./Header/Header";
import Table from "./Table/Table";
import style from "./Wrapp.module.css";

function Wrapp(props) {

  return (
    <div className={style.wrapp}>     
      <Header setNewGlassSymbol={props.setNewGlassSymbol} />
      <h1 className={style.glassSymbol}>{props.glassSymbol}</h1>
      <Table {...props} />
    </div>
  );
}

export default Wrapp;
