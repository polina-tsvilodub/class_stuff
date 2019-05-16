// In this file you can instantiate your views
// First instantiate your wrapping views, then you can instantiate your trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

* More about the properties and functions of the wrapping views - https://github.com/babe-project/babe-project/blob/master/docs/views.md#wrapping-views-properties

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
<<<<<<< HEAD
const intro = babeViews.view_generator('intro',{
=======
const intro = babeViews.view_generator('intro', {
>>>>>>> e3f7cb5cf8acc320c7be8c2751cd41515bc23bb5
    trials: 1,
    name: 'intro',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    text:   `Welcome to our mental rotation experiment!
            <br />
            <br />
            Thank you for participating!
            <br />
            <br />
            This is a simple experiment where you indicate your answer by a key press. You will get detailed instructions in a moment. Enjoy!`,
   buttonText: 'Begin the experiment'
});

// For most tasks, you need instructions views
const instructions = babeViews.view_generator('instructions', {
    trials: 1,
    name: 'instrucions',
    title: 'General Instructions',
    text:  `In this experiment you are supposed to tell whether two objects that are presented in a different
    orientation are actually the same or different.
    <br />
    You indicate your answer with a button press, where the key w corresponds to the answer that the objects are different and the key o corresponds to them being the same.
    <br />
    <br />
    We will start with a quick practice session of two images and then the real trial begins. In the practice we will tell you whether you were correct
    but we won't in the actual trial.
    <br />
    So remember: w = different, o = same.
    <br />
    Have Fun! :)`,
    buttonText: 'start practice'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = babeViews.view_generator('post_test', {
    trials: 1,
    name: 'post_test',
    title: 'Additional information',
    text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

    // You can change much of what appears here, e.g., to present it in a different language, as follows:
    // buttonText: 'Weiter',
    // age_question: 'Alter',
    // gender_question: 'Geschlecht',
    // gender_male: 'männlich',
    // gender_female: 'weiblich',
    // gender_other: 'divers',
    // edu_question: 'Höchster Bildungsabschluss',
    // edu_graduated_high_school: 'Abitur',
    // edu_graduated_college: 'Hochschulabschluss',
    // edu_higher_degree: 'Universitärer Abschluss',
    // languages_question: 'Muttersprache',
    // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
    // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = babeViews.view_generator('thanks', {
    trials: 1,
    name: 'thanks',
    title: 'Thank you for taking part in this experiment!',
    prolificConfirmText: 'Press the button'
});

/** trial (babe's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _babe (e.g. for use with a progress bar)
    - trial_type: string - the name of the trial type as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
        More about trial life cycle - https://github.com/babe-project/babe-project/blob/master/docs/views.md#trial-views-lifecycle

    - hook: object - option to hook and add custom functions to the view
        More about hooks - https://github.com/babe-project/babe-project/blob/master/docs/views.md#trial-views-hooks

* All about the properties of trial - https://github.com/babe-project/babe-project/blob/master/docs/views.md#properties-of-trial
*/


// Here, we initialize a forcedChoice view
const key_press_2A = babeViews.view_generator('key_press',{
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.key_press.length,
    // name and trial_type should be identical to the variable name
    name: 'key_press_2A',
    trial_type: 'key_press_2A',
    data: trial_info.key_press,
    pause: 1000,
    fix_duration: 500,
    // hook: {
    //     after_response_enabled: check_response
    // }
});

const practice_session = babeViews.view_generator('key_press', {
  // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  trials: trial_practice.key_press.length,
  // name and trial_type should be identical to the variable name
  name: 'practice_session',
  trial_type: 'practice_session',
  data: trial_info.key_press,
  pause: 1000,
  fix_duration: 500,
  hook: {
      after_response_enabled: check_response
  }
})

const trial_begin = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'trial_begin',
    title: 'Good Job!',
    text:  `We will start the actual experiment now!
    <br />
    Remember we will not continue to tell you wether your answers were correct from here on.
    The works exactly the same as the trials you just did! `,
    buttonText: 'go to trials'
});
// There are many more templates available:
// forcedChoice, sliderRating, dropdownChoice, testboxInput, ratingScale, imageSelection, sentenceChoice, keyPress, selfPacedReading and selfPacedReading_ratingScale

// If the provided templates are not enough, we can just create custom view templates in 02_custom_views_templates.js and use them here
