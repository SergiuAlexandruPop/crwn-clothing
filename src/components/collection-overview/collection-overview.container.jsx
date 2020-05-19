import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionOverview from "./collection-overview.component";

//the use of the selector is to pass the property with the name that the WithSpinner component expects wich is isLoading
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

//compose it's currying all the functions.
//it evaluates from right to left
//it's equivalent to this:
//connect(mapStateToProps)(WithSpinner(CollectionOverview));

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionsOverviewContainer;
