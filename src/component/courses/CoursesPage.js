import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseAction from '../../actions/courseAction';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';

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
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render() {
        const {courses} = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={courses}/> 
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
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
return {
    courses: state.courses
};
}

function mapDispatchToProps(dispatch) {
    return{
        actions: bindActionCreators(courseAction,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps) (CoursesPage);