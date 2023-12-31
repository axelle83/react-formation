import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./MemeForm.module.css";
import Button from "../../uis/Button/Button";
import { emptyMeme } from "orsys-tjs-meme";
// import {connect} from 'react-redux'
import { useSelector, useDispatch } from "react-redux";
import { changeMeme } from "../../../store/currentSlice";
const MemeForm = (props) => {
  console.log(props);
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <form>
        <label htmlFor="titre">
          <h1>Titre</h1>
        </label>
        <br />
        <input
          name="titre"
          id="titre"
          value={props.meme.titre}
          onChange={(evt) => {
            //console.log(evt)
            //props.onMemeChange({ ...props.meme, titre: evt.target.value });
            props.onMemeChange({ ...props.meme, titre: evt.target.value });
          }}
        />
        <hr />
        <label htmlFor="image">
          <h2>Image</h2>
        </label>
        <br />
        <select
          name="image"
          id="image"
          value={props.meme.imageId}
          onChange={(evt) => {
            //console.log(evt)
            //props.onMemeChange({ ...props.meme, titre: evt.target.value });
            props.onMemeChange({
              ...props.meme,
              imageId: Number(evt.target.value),
            });
          }}
        >
          <option value="-1">Pas d'image</option>
          {props.images.map((img, pos) => {
            return (
              <option key={pos} value={img.id}>
                {img.titre}
              </option>
            );
          })}
        </select>
        <hr />
        <label htmlFor="text">
          <h2>texte</h2>
        </label>
        <br />
        <input
          name="text"
          id="text"
          type="text"
          value={props.meme.text}
          onChange={(evt) => {
            props.onMemeChange({ ...props.meme, text: evt.target.value });
          }}
        />
        <br />
        <label htmlFor="x">
          <h2 className={styles.inline}>x :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="x"
          id="x"
          type="number"
          value={props.meme.x}
          onChange={(evt) => {
            //console.log(evt)
            props.onMemeChange({ ...props.meme, x: Number(evt.target.value) });
          }}
        />
        <label htmlFor="y">
          <h2 className={styles.inline}>y :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="y"
          id="y"
          type="number"
          value={props.meme.y}
          onChange={(evt) => {
            //console.log(evt)
            props.onMemeChange({ ...props.meme, y: Number(evt.target.value) });
          }}
        />
        <hr />
        <br />
        <h2>Decorations</h2>
        <label htmlFor="color">
          <h2 className={styles.inline}>color :</h2>
        </label>
        <input
          name="color"
          id="color"
          type="color"
          value={props.meme.color}
          onChange={(evt) => {
            //console.log(evt)
            props.onMemeChange({ ...props.meme, color: evt.target.value });
          }}
        />
        <br />
        <label htmlFor="fontSize">
          <h2 className={styles.inline}>font-size :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="fontSize"
          id="fontSize"
          type="number"
          min="0"
          value={props.meme.fontSize}
          onChange={(evt) => {
            //console.log(evt)
            props.onMemeChange({
              ...props.meme,
              fontSize: Number(evt.target.value),
            });
          }}
        />
        px
        <br />
        <label htmlFor="fontWeight">
          <h2 className={styles.inline}>font-weight :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="fontWeight"
          id="fontWeight"
          type="number"
          min="100"
          step="100"
          max="900"
          value={props.meme.fontWeight}
          onChange={(evt) => {
            //console.log(evt)
            props.onMemeChange({ ...props.meme, fontWeight: evt.target.value });
          }}
        />
        <br />
        <input
          name="underline"
          id="underline"
          type="checkbox"
          checked={props.meme.underline}
          onChange={(evt) => {
            //console.log(evt)
            props.onMemeChange({
              ...props.meme,
              underline: evt.target.checked,
            });
          }}
        />
        &nbsp;
        <label htmlFor="underline">
          <h2 className={styles.inline}>underline</h2>
        </label>
        &nbsp;<h2 className={styles.inline}>/</h2>&nbsp;
        <label htmlFor="italic">
          <h2 className={styles.inline}>italic</h2>
        </label>
        &nbsp;
        <input
          name="italic"
          id="italic"
          type="checkbox"
          checked={props.meme.italic}
          onChange={(evt) => {
            //console.log(evt)
            props.onMemeChange({ ...props.meme, italic: evt.target.checked });
          }}
        />
        <hr />
        <br />
        <label htmlFor="frameSizeX">
          <h2 className={styles.inline}>frame size X :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="frameSizeX"
          id="frameSizeX"
          type="number"
          min="0"
          value={props.meme.frameSizeX}
          onChange={(evt) => {
            //console.log(evt)
            props.onMemeChange({
              ...props.meme,
              frameSizeX: Number(evt.target.value),
            });
          }}
        />
        px
        <label htmlFor="frameSizeY">
          <h2 className={styles.inline}>frame size y :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="frameSizeY"
          id="frameSizeY"
          type="number"
          min="0"
          value={props.meme.frameSizeY}
          onChange={(evt) => {
            //console.log(evt)
            props.onMemeChange({
              ...props.meme,
              frameSizeY: Number(evt.target.value),
            });
          }}
        />
        px
        <br />
        <Button type={"submit"}>OK</Button>
      </form>
    </div>
  );
};

export default MemeForm;
MemeForm.propTypes = {
  onMemeChange: PropTypes.func.isRequired,
  meme: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired,
};
/*
function mapStateToProps(storeState,ownProps) {
  return {...ownProps,meme:storeState.current}
}
function mapDispatch(dispatch) {
  return {
    onMemeChange:(meme)=>dispatch(changeMeme(meme))
  }
}
export const ConnectedMemeForm=connect(mapStateToProps,mapDispatch)(MemeForm);
*/
export function ConnectedMemeForm(props) {
  const current = useSelector((s) => s.current);
  const images = useSelector((s) => s.ressources.images);
  const dispatch = useDispatch();
  return (
    <MemeForm
      {...props}
      images={images}
      meme={current}
      onMemeChange={(meme) => dispatch(changeMeme(meme))}
    />
  );
}
ConnectedMemeForm.propTypes = {};