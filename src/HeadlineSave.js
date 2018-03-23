import React from 'react';
import {ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';



const HeadlineSave =  ({id, title, link, isSaved, onToggle}) => (
        <div>
            <ListItem
                primaryText={title}
                secondaryText={link}
                leftAvatar={<Avatar
                icon={<FileFolder />}
                size={30}
                />}
                rightIconButton={
                    <RaisedButton
                        label={isSaved ? "Saved" : "Save"}
                        primary={isSaved}
                        style={{
                            marginRight: '15px'
                        }}
                        onClick={onToggle}
                    />
                }
            >
            </ListItem>

        </div>
);

export default HeadlineSave;