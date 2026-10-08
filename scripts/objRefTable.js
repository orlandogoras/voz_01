const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.wrap,
		C3.Plugins.UserMedia,
		C3.Plugins.Audio,
		C3.Plugins.SpeechRecognition,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.UserMedia.Acts.RequestMic,
		C3.Plugins.SpeechRecognition.Acts.RequestSpeechRecognition,
		C3.Plugins.SpeechRecognition.Cnds.OnSpeechRecognitionResult,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Exps.lowercase,
		C3.Plugins.SpeechRecognition.Exps.InterimTranscript,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Exps.max,
		C3.Plugins.System.Exps.find,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Sprite.Acts.MoveAtAngle,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Plugins.SpeechRecognition.Cnds.OnSpeechRecognitionEnd,
		C3.Plugins.UserMedia.Cnds.OnApproved,
		C3.Plugins.SpeechRecognition.Cnds.IsRecognisingSpeech,
		C3.Plugins.SpeechRecognition.Cnds.OnSpeechRecognitionError,
		C3.Plugins.SpeechRecognition.Exps.SpeechError
	];
};
self.C3_JsPropNameTable = [
	{"8Direcciones": 0},
	{Wrap: 0},
	{player: 0},
	{bullet: 0},
	{Multimedia: 0},
	{Audio: 0},
	{ReconocimientoDeVoz: 0},
	{texto_transcripcion: 0},
	{texto_mensajes: 0},
	{texto_transcrip_grados: 0},
	{pixel_advance: 0},
	{reconocer: 0},
	{comando: 0},
	{numero_grados_no: 0},
	{numero_grados: 0}
];

self.InstanceType = {
	player: class extends self.ISpriteInstance {},
	bullet: class extends self.ISpriteInstance {},
	Multimedia: class extends self.IWorldInstance {},
	Audio: class extends self.IInstance {},
	ReconocimientoDeVoz: class extends self.IInstance {},
	texto_transcripcion: class extends self.ITextInstance {},
	texto_mensajes: class extends self.ITextInstance {},
	texto_transcrip_grados: class extends self.ITextInstance {}
}