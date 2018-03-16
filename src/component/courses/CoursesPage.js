import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseAction from '../../actions/courseAction';

class CoursesPage extends React.Component {

    constructor(props,context){
        super(props,context);

        this.state = {
            course:{title:''}
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const course1 = this.state.course;
        course1.title=event.target.value;
        this.setState({course:course1});
    }

    onClickSave() {
        //alert(`Saving ${this.state.course.title}`);
        this.props.dispatch(courseAction.createCourse(this.state.course));
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input
                type = "text"
                onChange={this.onTitleChange}
                value={this.state.course.title}/>

                <input
                type="submit"
                value="Save"
                onClick={this.onClickSave} />
            </div>
        );
    }
}
CoursesPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
return {
    courses: state.courses
};
}


export default connect(mapStateToProps) (CoursesPage);