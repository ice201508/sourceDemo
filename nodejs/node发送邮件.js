var nodemailer = require('nodemailer');

//配置邮件
var transporter = nodemailer.createTransport('SMTP',{
	host:'smtp.163.com',
	secureConnection: true,
	port: 465,
	auth: {
		user: 'leko-ljl@163.com',
		pass: 't495969T'
	}
});

//发送邮件
var sendMail = function(html){
	var option = {
		from: 'leko-ljl@163.com',
		to: '414612218@qq.com',
		subject: '主题内容显示位置',
		html: html,
		attachments: [
			{
				fileName: 'a.js',
				filePath: 'a.js',
				contentType: 'application/javascript'
			}
		]
	}
	transporter.sendMail(option, function(error, response){
		if(error){
			console.error('fail: ' + error);
		} else {
			console.log('success: ' + response.message);
		}
	});
}

sendMail("收到速回： <br />nodemailer相当于客户端？");
