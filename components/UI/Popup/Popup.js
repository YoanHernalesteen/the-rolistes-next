
import classes from './Popup.module.css';

const Popup = (props) => {

    // const google = "<iframe width='100%' height='100%' src='https://eepurl.com/gJCUVX' sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'></iframe>";
    const fields = [
        {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
        },
        {
          name: 'FNAME',
          placeholder: 'First Name',
          type: 'text',
          required: false
        },
        {
          name: 'LNAME',
          placeholder: 'Last Name',
          type: 'text',
          required: false
        }
        ];
    

    return(
        // <div className={classes.popup}>
        //     <div className={classes.popup_inner}>
        //         <h1> Subscribe to The Rolistes Newsletter </h1>
        //         <Mailchimp
        //             action={process.env.REACT_APP_MAILCHIMP_URL}
        //             fields={fields}/>
        //         <p>We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. <a href="https://mailchimp.com/legal/" target="_blank">Learn more about Mailchimp's privacy practices here.</a></p>
        //         <iframe width='100%' height='100%' src='https://eepurl.com/gJCUVX' sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'></iframe>
        //         <button onClick={props.clicked}> close me </button>                
        //     </div>
            
            <div className={classes.popup}>
                <div className={classes.popup_inner}>
                    <div id="mc_embed_signup">
                        <form action="https://rolistespod.us5.list-manage.com/subscribe/post?u=f61d61144f062b5906ef5548d&amp;id=1a93afb7bd" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                            <div id="mc_embed_signup_scroll">
                            <h2>Subscribe to The Rolistes Newsletter</h2>
                        <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                        <div class="mc-field-group">
                            <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
                        </label>
                            <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL"/>
                        </div>
                        <div class="mc-field-group">
                            <label for="mce-FNAME">First Name </label>
                            <input type="text" value="" name="FNAME" class="" id="mce-FNAME"/>
                        </div>
                        <div class="mc-field-group">
                            <label for="mce-LNAME">Last Name </label>
                            <input type="text" value="" name="LNAME" class="" id="mce-LNAME"/>
                        </div>
                        <div id="mergeRow-gdpr" class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">
                            <div class="content__gdpr">
                                <label>Marketing Permissions</label>
                                <p>Please confirm you would like to hear from Rolistes Podcast by email.</p>
                                <fieldset class="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
                                <label class="checkbox subfield" for="gdpr_16673"><input type="checkbox" id="gdpr_16673" name="gdpr[16673]" value="Y" class="av-checkbox gdpr"/><span>Yes, please email me!</span> </label>
                                </fieldset>
                                <p>You can unsubscribe at any time by clicking the link in the footer of our emails. For information about our privacy practices, please visit our website.</p>
                            </div>
                            {/* <div class="content__gdprLegal">
                                <p>We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. <a href="https://mailchimp.com/legal/" target="_blank">Learn more about Mailchimp's privacy practices here.</a></p>
                            </div> */}
                        </div>
                            <div id="mce-responses" class="clear">
                            {/* style="display:none" */}
                                <div class="response" id="mce-error-response" ></div>
                            {/* style="display:none" */}
                                <div class="response" id="mce-success-response"></div> 
                            </div>   
                            {/* style="position: absolute; left: -5000px;" */}
                                {/* <div  aria-hidden="true"><input type="text" name="b_f61d61144f062b5906ef5548d_1a93afb7bd" tabindex="-1" value=""/></div> */}
                                <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"/></div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>        
    );

}

export default Popup;