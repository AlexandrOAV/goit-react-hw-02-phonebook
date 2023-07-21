import PropTypes from 'prop-types';
export const Filter = ({ onChange }) => {
    
    return (
        <>
            <label htmlFor="filter">Find contacts by name</label>
            <input id='filter' name='filter' type='text' placeholder='name to search for'  onChange={onChange}/>
        </>
    )

}
Filter.propTypes={
    onChange: PropTypes.func.isRequired,
    
}